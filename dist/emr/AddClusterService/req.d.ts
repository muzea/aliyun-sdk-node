interface AddClusterServiceRequest {
    /**
    * 集群对应的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "Service": string[];
    /**
    * 待添加服务的集群ID。
    * @example `C-F32FB31D8295****`
    */ "ClusterId": string;
    /**
    * 本次添加服务的备注信息。
    * @example `addService`
    */ "Comment"?: string;
}
export { AddClusterServiceRequest };