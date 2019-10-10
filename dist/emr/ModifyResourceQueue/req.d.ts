interface ModifyResourceQueueRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源池队列ID。
    * @example `116`
    */ "Id": string;
    /**
    * 集群ID。
    * @example `C-0E995C0EE7E5****`
    */ "ClusterId": string;
    /**
    * 资源池ID。
    * @example `115`
    */ "ResourcePoolId": number;
    "Config": string[];
    /**
    * 队列名称。
    * @example `pool2`
    */ "Name"?: string;
    /**
    * 无需填写。
    * @example `test`
    */ "QualifiedName"?: string;
    /**
    * 父资源池ID。
    * @example `115`
    */ "ParentQueueId"?: number;
    /**
    * 是否叶子节点。
    * @example `false`
    */ "Leaf"?: boolean;
}
export { ModifyResourceQueueRequest };