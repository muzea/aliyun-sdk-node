export interface BatchUpdateDeviceNicknameRequest {
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
     * 要修改备注名称的设备列表。
     */
    "DeviceNicknameInfo": {
        /**
         * 要修改备注名称的设备所隶属的产品ProductKey。
         * > 如果传入该参数，需同时传入**DeviceName**。
         * @example `a1BwAGV****`
         */
        ProductKey: string;
        /**
         * 要修改备注名称的设备名称。
         * > 如果传入该参数，需同时传入**ProductKey**。
         * @example `light`
         */
        DeviceName: string;
        /**
         * 新的设备备注名称。备注名称长度为4~32个字符，可包含中文汉字、英文字母、数字和下划线（_）。一个中文汉字算2个字符。
         * > 若不传入该参数，则删除该设备原有的备注名称。
         * @example `AliyunDataCenter`
         */
        Nickname: string;
        /**
         * 要修改备注名称的设备ID。
         * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
         * @example `Q7uOhVRdZRRlDnTLv****00100`
         */
        IotId: string;
    }[];
}
