export interface CheckCdnDomainExistResponse {
    /**
     * 请求ID。
     * @example `64D28B53-5902-409B-94F6-FD46680144FE`
     */
    RequestId: string;
    /**
     * 域名状态，取值：
     * - **DomainNotExist**：域名未被添加
     * - **DomainExistOtherUser**：域名已被其他账号添加
     * - **DomainExistCdnProduct**：域名已被添加至Cdn
     * - **DomainExistDcdnProduct**：域名已被添加至Dcdn
     * - **DomainExistScdnProduct**：域名已被添加至Scdn
     * - **DomainExistVodProduct**：域名已被添加至Vod
     * - **DomainExistLiveProduct**：域名已被添加至Live
     * - **DomainExistDcdnipaProduct**：域名已被添加至Dcdnipa
     * @example `DomainNotExist`
     */
    Status: string;
}
