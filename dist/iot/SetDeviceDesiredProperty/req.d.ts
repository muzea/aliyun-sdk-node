export interface SetDeviceDesiredPropertyRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要设置期望属性值的设备所隶属的产品ProductKey。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 要设置期望属性值的设备名称。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 要设置期望属性值的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    /**
     * 当前期望属性值版本，组成为Key:Value，数据格式为JSON String，例如{"Temperature":2}。
     * - **Key**取值为属性的标识符（identifier）。可在控制台中，设备所属产品的功能定义中查看属性的identifier。
     *     > 一次调用中，key的取值（即属性的identifier）不能重复。
     * - **Value**取值为当前期望属性值的版本号。
     *     首次设置期望属性值时，指定该参数值为0。首次设置期望属性值后，期望值版本号为1。以后每次设置期望值后，物联网平台自动将期望值版本加1（即第二次设置期望属性值时，指定该参数值为1。设置成功后，版本号自动变为2；第三次设置时，指定该参数值为2。设置成功后，版本号自动变为3；以此类推）。
     *     > 如果传入的版本号与当前版本不符，服务器将拒绝此次请求。若您不确定当前期望值的版本号，可以不传入版本号，但仍需传入有效的JSON，即传入{}。
     * @example `{"Temperature":2}`
     */
    "Versions": string;
    /**
     * 要设置的期望属性值，组成为属性的**Key:Value**，数据格式为JSON String，例如**{"Temperature":35}**。最多可输入10个期望属性值。
     * - **Key**取值为属性的标识符（**identifier**）。可在控制台中，设备所属产品的**功能定义**中查看；或调用[QueryThingModel](~~150321~~)，从返回的物模型数据中查看。
     *     如果是自定义（非默认）模块testFb下属性temperature，则参数值为**{"testFb:temperature":35}**。
     *     > 指定属性必须是读写型。如果您指定了一个只读型的属性，设置将会失败。并且， 一次调用中，不能传入重复的属性标识符。
     *
     * - **Value**取值为要设置的期望属性值。取值需符合您为该属性定义的数据类型和取值范围。
     *     > 若属性值设置为null，则表示清空期望属性值。
     * @example `{"Temperature":35}`
     */
    "Items": string;
}
