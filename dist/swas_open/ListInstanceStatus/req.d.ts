export interface ListInstanceStatusRequest {
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量应用服务器的实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]`
     */
    "InstanceIds"?: string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    "PageSize"?: number;
}
