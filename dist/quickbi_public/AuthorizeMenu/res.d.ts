export interface AuthorizeMenuResponse {
    /**
     * 请求ID。
     * @example `188F0B12-00EF-41B3-944A-FB7EF06C9F43`
     */
    RequestId: string;
    /**
     * 授权成功的菜单数。
     * @example `2`
     */
    Result: number;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
