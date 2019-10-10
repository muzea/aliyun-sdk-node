interface CreateFabricOrganizationUserRequest {
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
    * @example `peers-yidio-1tuigx42b****`
    */ "OrganizationId": string;
    /**
    * 密码
    * @example `password`
    */ "Password"?: string;
    /**
    * ABAC属性
    * @example `foo=foo1,bar=bar1`
    */ "Attrs"?: string;
}
export { CreateFabricOrganizationUserRequest };