import db from '../../firebase';

import departments from '../../departments';

export default {
  namespaced: true,
  state: {
    list: [],
    isLoading: false,
  },
  actions: {
    getDocs({ state }) {
      state.isLoading = true;
      db.collection('shopping_list').orderBy('department').onSnapshot((snapshot) => {
        state.list = snapshot.docs.map((doc) => ({
          id: doc.id,
          shoppingItem: {
            name: doc.data().name,
            quantity: doc.data().quantity,
            department: departments[doc.data().department],
          },
        }));
      });
      state.isLoading = false;
    },
    saveDoc(_, payload) {
      db.collection('shopping_list').add(payload);
    },
    deleteDoc(_, itemId) {
      db.collection('shopping_list').doc(itemId).delete();
    },
    editDoc(_, payload) {
      db.collection('shopping_list').doc(payload.id).update({
        name: payload.name,
        quantity: Number(payload.quantity),
        department: Number(payload.departmentKey),
      });
    },
  },
};
