interface CreateResourceQueueRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 队列名称。
    * @example `DefaultQueue`
    */ "Name": string;
    /**
    * 集群ID。
    * @example `C-0E995C0EE7E5ECB3`
    */ "ClusterId": string;
    /**
    * 资源池ID。
    * @example `115`
    */ "ResourcePoolId": number;
    /**
    * 无需填写。
    * @example `test`
    */ "QualifiedName"?: string;
    /**
    * 父资源池ID。
    * @example `225`
    */ "ParentQueueId"?: number;
    /**
    * 是否叶子节点。
    * @example `false`
    */ "Leaf"?: boolean;
    "Config"?: string[];
}
export { CreateResourceQueueRequest };