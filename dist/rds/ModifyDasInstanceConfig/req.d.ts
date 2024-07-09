export interface ModifyDasInstanceConfigRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 存储空间自动扩展开关，取值：
     * * **Enable**：开启
     * * **Disable**：关闭
     * @example `Enable`
     */
    "StorageAutoScale": string;
    /**
     * 触发阈值百分比，当剩余存储空间百分比达到设定的阈值时，会触发自动扩容。取值：
     * * **10**
     * * **20**
     * * **30**
     * * **40**
     * * **50**
     * >**StorageAutoScale**=**Enable**时必须传入本参数。
     * @example `50`
     */
    "StorageThreshold"?: number;
    /**
     * 自动扩容上限，需要大于等于实例当前存储空间总大小。
     * - ESSD云盘上限：32000 GB
     * - SSD云盘上限：6000 GB
     * >**StorageAutoScale**=**Enable**时必须传入本参数。
     * @example `1000`
     */
    "StorageUpperBound"?: number;
}
