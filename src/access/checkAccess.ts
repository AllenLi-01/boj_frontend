import ACCESS_ENUM from "@/access/accessEnum";

/**
 *
 * @param user 用户
 * @param needAccess 需要的权限
 * @return boolean 是否具有权限
 */
const checkAccess = (user: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  const userAccess = user?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  if (needAccess === ACCESS_ENUM.USER) {
    if (userAccess !== ACCESS_ENUM.NOT_LOGIN) {
      return true;
    }
  }
  return needAccess === userAccess;
};
export default checkAccess;
