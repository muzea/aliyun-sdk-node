export interface DescribeDeviceChannelsRequest {
    /**
     * 按设备ID查询
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 分页大小，默认为20
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 第几个分页，默认为1
     * @example `1`
     */
    "PageNum"?: number;
}
