export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    palyload: { data },
  };
}

export function updateProfileSucess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCESS',
    palyload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
