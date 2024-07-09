export interface ResetApplicationRequest {
    /**
     * 应用ID，可通过[ListApplication](~~149390~~)获取。
     * @example `3616cdca-4f92*********`
     */
    "AppId": string;
    /**
     * 应用下需要重置机器的eccid，多个用半角逗号（,）分隔，可通过调用[QueryApplicationStatus](~~149394~~)接口获取eccid。
     * @example `0cf49a6c-***********`
     */
    "EccInfo": string;
}
