export interface ListProductByTagsResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    ProductInfos: {
        /**
         * 调用成功时，返回产品信息列表（**ProductInfo**）。
         * > 返回的产品信息按照产品创建时间倒序排列。
         */
        ProductInfo: {
            /**
             * 产品的ProductKey。是物联网平台为新建产品颁发的全局唯一标识符。
             * @example `a1BwAGV****`
             */
            ProductKey: string;
            /**
             * 产品名称。
             * @example `路灯`
             */
            ProductName: string;
            /**
             * 产品的节点类型，取值：
             * - **0**：设备。设备不能挂载子设备。可以直连物联网平台，也可以作为网关的子设备连接物联网平台。
             * - **1**：网关。网关可以挂载子设备，具有子设备管理模块，维持子设备的拓扑关系，和将拓扑关系同步到物联网平台。
             * @example `0`
             */
            NodeType: number;
            /**
             * 产品描述。
             * @example `This is a test product.`
             */
            Description: string;
            /**
             * 产品创建时间。
             * @example `1545355537000`
             */
            CreateTime: number;
        }[];
    };
}
