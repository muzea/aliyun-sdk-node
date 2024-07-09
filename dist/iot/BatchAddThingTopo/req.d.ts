export interface BatchAddThingTopoRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 网关设备所属的产品的ProductKey。
     * @example `a1vL7cp****`
     */
    "GwProductKey": string;
    /**
     * 网关设备的名称。
     * @example `gateway`
     */
    "GwDeviceName": string;
    /**
     * 添加的的设备拓扑关系列表。
     */
    "TopoAddItem": {
        /**
         * 要接入网关的子设备所属的产品ProductKey。
         * @example `a1BwAGV****`
         */
        ProductKey: string;
        /**
         * 要接入网关的子设备名称。
         * @example `light`
         */
        DeviceName: string;
        /**
         * 添加拓扑关系的签名。
         * 根据签名计算方式**SignMethod(deviceSecret,content)**，计算出的结果作为Sign的取值。
         * 其中，**content**是将所有提交给服务器的子设备参数（Sign、SignMethod除外），按照英文字母升序，依次排序拼接（无拼接符号）的结果。
         * 例如，如果传入的设备参数为**ClientId=868575026974305、DeviceName=868575026974305、ProductKey=a1PB5fp1234、SignMethod=hmacmd5，且deviceSecret=1234**，那么签名计算为`hmacmd5(1234, clientId868575026974305deviceName868575026974305productKeya1PB5fpX1234)`；签名计算结果为`C1C1606D61884C5F16C9EA6622E5****`。
         * > 示例中的**ClientId**为设备的客户端ID，您可自定义。
         * @example `C1C1606D61884C5F16C9EA6622E5****`
         */
        Sign: string;
        /**
         * UTC时间戳。非必选。如果传入该参数，则需包含到签名计算中。
         * @example `1579335899000`
         */
        Timestamp: string;
        /**
         * 签名方法。支持**hmacSha1**、**hmacSha256**、**hmacMd5**和**Sha256**（大小写不敏感）。
         * @example `hmacMd5`
         */
        SignMethod: string;
        /**
         * 设备端ID，可使用设备的SN码或MAC地址。非必选参数。如果传入该参数，则需包含到签名计算中。
         * @example `a1BwAGV****device1`
         */
        ClientId: string;
    }[];
}
