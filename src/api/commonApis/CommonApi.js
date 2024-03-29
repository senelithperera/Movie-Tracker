import { EndPointsHelper } from '../../helpers/ApiEndPointsHelper';
import * as ApiConnector from '../ApiConnector';

export const getPopularMovies = async params => {
    try {
      const response = await ApiConnector.get(EndPointsHelper.popularMovies, params);
      return response;
    } catch (exception) {
      console.error('error', exception);
      return exception;
    }
  };