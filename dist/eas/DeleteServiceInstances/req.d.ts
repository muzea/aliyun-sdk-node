export interface DeleteServiceInstancesRequest {
    /**
     * 服务所在区域。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 重启的实例列表，多个实例名称之间使用半角逗号（,）分隔。如何查看实例名称，请参见[ListServiceInstances](~~412108~~)。
     * @example `foo-rdsbxxxx,foo-rdsaxxxx`
     */
    "InstanceList": string;
    /**
     * 是否只重启容器进程，不重建实例。默认为false。
     * @example `true`
     */
    "SoftRestart"?: boolean;
    /**
     * 需要重启进程的容器名称。只有在SoftRestart参数为true，该参数才会生效。
     * @example `worker0`
     */
    "Container"?: string;
}
