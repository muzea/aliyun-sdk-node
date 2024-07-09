export interface UpdateBasicAcceleratorRequest {
    /**
     * 基础型全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567****`
     */
    "ClientToken"?: string;
    /**
     * 基础型全球加速实例的名称。
     * 名称长度为 1~128 个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `BasicAccelerator`
     */
    "Name"?: string;
    /**
     * 基础型全球加速实例的描述信息。
     * 描述长度最大200字符，不能以`http://`和`https://`开头。
     * @example `BasicAccelerator`
     */
    "Description"?: string;
    /**
     * 基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    "AcceleratorId": string;
}
