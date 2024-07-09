export interface CreateEdgeOssPreSignedAddressRequest {
    /**
     * 资源ID。目前仅支持驱动资源，因此此处为驱动ID。
     * 可在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**驱动管理**页面中，鼠标悬浮在目标驱动名称上获取驱动ID。您也可以调用[QueryEdgeDriver](~~155776~~)接口获取驱动ID。
     * @example `df9b9f441*********4c90d0c21d14`
     */
    "ResourceId": string;
    /**
     * 文件名，格式为`<文件名>.<后缀>`。
     * @example `testfile.zip`
     */
    "FileName": string;
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 文件内容类型。有如下三种类型：
     * - DRIVER_VERSION_CONTENT：驱动某一版本的代码。
     * - DRIVER_VERSION_DEFAULT_CONFIG：驱动某一版本的默认配置。
     * - INSTANCE_DRIVER_VERSION_CONFIG：边缘实例驱动某一版本的配置。
     * @example `DRIVER_VERSION_CONTENT`
     */
    "Type": string;
    /**
     * 边缘实例ID。在[边缘计算控制台](https://iot.console.aliyun.com/le/instance/list)的**边缘实例**页面中，鼠标悬浮在目标边缘实例名称上获取ID。
     * 您也可以调用[QueryEdgeInstance](~~135214~~)接口获取。
     * > 当**Type**参数取值为**INSTANCE_DRIVER_VERSION_CONFIG**时，此项不可为空。
     * @example `F3APY0tPLhmgGtx0****`
     */
    "InstanceId"?: string;
    /**
     * 资源版本。目前仅支持驱动资源，因此此处为驱动版本。
     * @example `2.0.0`
     */
    "ResourceVersion": string;
}
