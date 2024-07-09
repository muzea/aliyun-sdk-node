export interface GetRegisterCodeResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `020F6A43-19E6-4B6E-B846-44EB31DF****`
     */
    RequestId: string;
    /**
     * 返回的CA证书的注册码。
     * @example `13274673-8f90-4630-bea1-9cccb25756ad2089******`
     */
    RegisterCode: string;
}
