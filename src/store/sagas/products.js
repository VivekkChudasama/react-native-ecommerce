import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import ProductActions from '~/store/ducks/products';
import ErrorActions from '~/store/ducks/error';

export function* loadProducts({ categoryId }) {
  const response = yield call(api.get, `/category_products/${categoryId}`);

  if (response) {
    yield put(ProductActions.loadProductsSuccess(response.data, categoryId));
  } else {
    yield put(ErrorActions.setError('Oh, something is wrong now, try again!'));
  }
}
