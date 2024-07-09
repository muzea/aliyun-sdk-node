export interface CreateGatewayRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-***-v6***`
     */
    "IotInstanceId"?: string;
    /**
     * 网关唯一标识。
     * @example `0000000000000000`
     */
    "GwEui": string;
    /**
     * 网关PinCode，用于确保录入者拥有该网关。
     * @example `000000`
     */
    "PinCode": string;
    /**
     * 自定义网关名称。
     * - 仅支持中文汉字、英文字母、数字、下划线（_）。
     * - 必须以中文汉字、英文字母或数字开头。
     * - 长度不超过30个字符，不少于4个字符（一个中文汉字算一个字符）。
     * @example `vmee`
     */
    "Name": string;
    /**
     * 自定义网关描述信息，长度不超过100个字符（一个中文汉字算一个字符）。
     * @example `my gateway`
     */
    "Description"?: string;
    /**
     * 网关频段ID。
     * @example `123`
     */
    "FreqBandPlanGroupId": number;
    /**
     * 网关通信模式。取值：
     * - FULL_DUPLEX：全双工。
     * - HALF_DUPLEX：半双工。
     * @example `HALF_DUPLEX`
     */
    "CommunicationMode": string;
    /**
     * 网关所在城市名称。
     * @example `杭州`
     */
    "City": string;
    /**
     * 网关所在城区名称。
     * @example `滨江区`
     */
    "District": string;
    /**
     * 网关所在详细地址。
     * @example `详细地址`
     */
    "Address": string;
    /**
     * 网关经纬度所采用的坐标系统，可取值为**WGS_84**, **GCJ_02**。
     * @example `GCJ_02`
     */
    "GisCoordinateSystem": string;
    /**
     * 网关经度。
     * @example `123.45678`
     */
    "Longitude": number;
    /**
     * 网关纬度。
     * @example `23.45678`
     */
    "Latitude": number;
    /**
     * 网关所在地区ID，由`http://lbs.amap.com/api/javascript-api/download`定义。
     * @example `123`
     */
    "AddressCode": number;
}
