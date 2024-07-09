export interface CreateEdgeDriverRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 驱动名称。支持大小写英文字母、数字和下划线（_），必须以英文字母开头，不超过20个字符。
     * @example `MyLedDriver`
     */
    "DriverName": string;
    /**
     * 驱动通信协议。取值如下：
     * - modbus：Modbus通信协议。
     * - opc-ua：OPC UA通信协议。
     * - customize：自定义通信协议。
     * @example `customize`
     */
    "DriverProtocol": string;
    /**
     * 驱动的语言类型。支持如下三种类型：
     * - nodejs8：Node.js v8
     * - python3：Python v3.5
     * - c: C语言
     * @example `c`
     */
    "Runtime": string;
    /**
     * 驱动适配的CPU架构。取值如下：
     * - armv7
     * - armv7-hf
     * - aarch64
     * - x86-64
     * - x86
     * @example `x86-64`
     */
    "CpuArch"?: string;
    /**
     * 是否内置驱动文件。
     * - true：表示驱动为内置驱动，即驱动代码已预置到网关上。
     * - false：表示驱动为非内置驱动。 非内置驱动必须上传驱动代码。默认为false。
     *     > 非内置驱动必须上传驱动代码。如需通过API的方式上传驱动代码并获取阿里云对象存储（OSS）地址，请调用[CreateOssPreSignedAddress](~~155858~~)接口创建预签名地址后，使用OSS SDK上传驱动文件。
     * @example `false`
     */
    "IsBuiltIn"?: boolean;
}
