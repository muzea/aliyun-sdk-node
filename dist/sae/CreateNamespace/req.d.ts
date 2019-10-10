interface CreateNamespaceRequest {
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
    * 描述
    * @example `description`
    */ "NamespaceDescription"?: string;
}
export { CreateNamespaceRequest };