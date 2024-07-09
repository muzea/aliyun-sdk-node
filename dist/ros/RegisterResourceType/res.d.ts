export interface RegisterResourceTypeResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 注册ID。可使用[ListResourceTypeRegistrations](~~2330740~~)接口查询注册结果。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    RegistrationId: string;
}
