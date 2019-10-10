interface ResetFabricOrganizationUserPasswordRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 用户名
    * @example `username`
    */ "Username": string;
    /**
    * 组织ID
    * @example `peers-aaaaaa2-1eqnj5o5w****`
    */ "OrganizationId": string;
    /**
    * 密码
    * @example `pwd`
    */ "Password"?: string;
    /**
    * 位置
    * @example `cn-hangzhou`
    */ "Location"?: string;
}
export { ResetFabricOrganizationUserPasswordRequest };