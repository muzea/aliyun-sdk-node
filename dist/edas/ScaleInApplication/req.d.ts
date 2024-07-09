export interface ScaleInApplicationRequest {
    /**
     * 应用ID，您可通过查询[ListApplication](~~149390~~)接口获取。
     * @example `3616cdca-4f92-44***********************`
     */
    "AppId": string;
    /**
     * 应用下需要缩容的机器的eccid，多个用“,”分开，您可以通过调用[QueryApplicationStatus](~~149394~~)接口获取eccid。
     * @example `7040f221-42df-48e8-9*******************`
     */
    "EccInfo": string;
    /**
     * 是否要强制下线，一般只有ECS过期了才会设为true，正常情况不用填写。
     * @example `false`
     */
    "ForceStatus"?: boolean;
}
