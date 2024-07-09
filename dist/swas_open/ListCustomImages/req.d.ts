export interface ListCustomImagesRequest {
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 轻量应用服务器的镜像ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["fe9c66133a9d4688872869726b52****", "794c230fd3e64ea19f83f4d7a0ad****"]`
     */
    "ImageIds"?: string;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 快照列表的页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 轻量应用服务器的镜像名称。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["test1****", "test2****"]`
     */
    "ImageNames"?: string;
    /**
     * 系统盘快照ID。
     * @example `s-bp14m09pq8***0g6`
     */
    "SystemSnapshotId"?: string;
    /**
     * 数据盘快照ID。
     * @example `s-acscasca****`
     */
    "DataSnapshotId"?: string;
    /**
     * 自定义镜像的标签列表。
     */
    "Tag"?: {
        /**
         * 自定义镜像的标签键。标签键长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 自定义镜像的标签值。标签值长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-aek2bti7cf7yj2i`
     */
    "ResourceGroupId"?: string;
    "Share"?: boolean;
    "InstanceId"?: string;
}
