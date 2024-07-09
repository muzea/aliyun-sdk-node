export interface ListInstancesTrafficPackagesRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量应用服务器实例ID。取值可以由一个或多个实例ID组成一个JSON数组，最多支持100个实例ID，实例ID之间用半角逗号（,）隔开。
     * @example `["2ad1ae67295445f598017499dc******","2ad1ae67295445f598017499dc******"]`
     */
    "InstanceIds": string;
}
