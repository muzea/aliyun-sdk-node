interface UpdateNamespaceRequest {
    "RegionId"?: string;
    /**
    * 命名空间ID
    * @example `cn-beijing:test`
    */ "NamespaceId": string;
    /**
    * 命名空间名称
    * @example `name`
    */ "NamespaceName"?: string;
    /**
    * 命名空间描述
    * @example `desc`
    */ "NamespaceDescription"?: string;
}
export { UpdateNamespaceRequest };