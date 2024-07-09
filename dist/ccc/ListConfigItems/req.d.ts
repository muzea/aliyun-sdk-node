export interface ListConfigItemsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 配置信息所属的对象的ID，可以是阿里云主账号ID、实例ID、技能组ID、坐席ID。
     * @example `ccc-test`
     */
    "ObjectId": string;
    /**
     *  配置信息所属对象的类型。
     * @example `INSTANCE`
     */
    "ObjectType": string;
}
