// mutations
import { ProfileMutations } from './services/mutations/BusinessProfile';
import { ProductMutations } from './services/mutations/product';
import { CartMutations } from './services/mutations/Cart';
import RegisterUser from './services/mutations/auth/register';
import VerifyUser from './services/mutations/auth/verify';
import ForgotPasswordEmail from './services/mutations/auth/forgotPassword/forgotPassword-Email';
import NewPassword from './services/mutations/auth/forgotPassword/newPassword';
import VerifyPassword from './services/mutations/auth/forgotPassword/verifyPassword';

// Queries
import { ProfileQueries } from './services/queries/BusinessProfile';
import { ProductQuery } from './services/queries/product';
import { CategoryQuery } from './services/queries/category';
import { UserQuery } from './services/queries/profile';

// Services From Redux Toolkit Query
export const allServices = {
  queries: { ...ProfileQueries, ...ProductQuery, ...CategoryQuery, ...UserQuery },
  mutations: {
    ...ProfileMutations,
    ...ProductMutations,
    ...CartMutations,
    RegisterUser,
    VerifyUser,
    ForgotPasswordEmail,
    NewPassword,
    VerifyPassword,
  },
};

export const allSlices = {};
