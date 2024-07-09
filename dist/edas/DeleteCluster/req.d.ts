export interface DeleteClusterRequest {
    /**
     * 集群ID。
     * @example `8b96ade0-0a07-****-af9d-5ed83640d076`
     */
    "ClusterId": string;
    /**
     * 集群ID类型，取值如下：
     * * 0 - EDAS集群ID。
     * * 1 - 容器服务集群ID。
     * @example `0`
     */
    "Mode"?: number;
}
