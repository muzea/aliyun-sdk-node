interface CreateFlowProjectClusterSettingRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-ED2F3E844FE383AA`
    */ "ProjectId": string;
    /**
    * 集群ID。
    * @example `C-DCEE11B49C8F42B4`
    */ "ClusterId": string;
    /**
    * 默认**linux**提交用户, 默认值为**hadoop**。
    * @example `hadoop`
    */ "DefaultUser"?: string;
    /**
    * 默认提交队列, 默认值为**default**。
    * @example `default`
    */ "DefaultQueue"?: string;
    "UserList"?: string[];
    "QueueList"?: string[];
    "HostList"?: string[];
}
export { CreateFlowProjectClusterSettingRequest };