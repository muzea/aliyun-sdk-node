interface ModifyVRouterAttributeRequest {
    /**
    * VPC所在的地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    *  路由器的ID。
    * @example `vrt-bp1lhl0taikrteen8****`
    */ "VRouterId": string;
    /**
    * 路由器的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
    * @example `VRouter-1`
    */ "VRouterName"?: string;
    /**
    * 路由器的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `My VRouter`
    */ "Description"?: string;
}
export { ModifyVRouterAttributeRequest };