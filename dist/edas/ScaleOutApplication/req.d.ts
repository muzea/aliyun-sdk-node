export interface ScaleOutApplicationRequest {
    /**
     * 应用ID。获取应用ID，请参见[ListApplication](~~149390~~)。
     * @example `3616cdca-4f92-4413*****************`
     */
    "AppId": string;
    /**
     * 指定ECU进行扩容。获取ecuid，请参见[ListScaleOutEcu](~~149371~~)。多个ECU，用半角逗号（,）分开。
     * @example `8123db90-880f-486f-b***************`
     */
    "EcuInfo": string;
    /**
     * 需要扩容的应用实例分组。获取应用实例分组，请参见[QueryApplicationStatus](~~149394~~)。
     * @example `4f1fb6f5-6769-4bd6******************`
     */
    "DeployGroup": string;
}
