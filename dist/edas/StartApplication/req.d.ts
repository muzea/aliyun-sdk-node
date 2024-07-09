export interface StartApplicationRequest {
    /**
     * 应用ID，可通过[ListApplication](~~149390~~)获取。
     * @example `3616cdca-4f92-4413**********`
     */
    "AppId": string;
    /**
     * 应用下需要重置机器的eccid，多个用“,”分开，可通过调用[QueryApplicationStatus](~~149394~~)接口获取eccid。
     * @example `""`
     */
    "EccInfo"?: string;
}
