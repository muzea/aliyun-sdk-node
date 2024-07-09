export interface AddLiveDomainRequest {
    /**
     * 域名业务类型。取值：
     * - **liveVideo**：播流域名。如果选择DomainName（需要接入直播的域名）为播流域名时，则域名业务类型必须选择为liveVideo。
     * - **liveEdge**：边缘推流域名。如果选择DomainName（需要接入直播的域名）为推流域名时，则域名业务类型必须选择为liveEdge。
     * @example `liveVideo`
     */
    "LiveDomainType": string;
    /**
     * 需要接入直播的推流域名或播流域名。支持泛域名，以英文句号（.）开头。
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 直播域名单元化信息。取值：
     * - **cn-beijing**：北京。
     * - **cn-shanghai**：上海。
     * - **cn-shenzhen**：深圳。
     * - **cn-qingdao**：青岛。
     * - **ap-southeast-1**：新加坡。
     * - **eu-central-1**：德国。
     * - **ap-northeast-1**：东京。
     * - **ap-south-1**：孟买。
     * - **ap-southeast-5**：雅加达。
     * >Region（直播域名单元化信息）与Scope（加速区域）之间不存在相互限制。
     * @example `cn-beijing`
     */
    "Region": string;
    /**
     * 健康检测URL。
     * @example `http://demo.aliyundoc.com/status.html`
     */
    "CheckUrl"?: string;
    /**
     * 加速区域。国际用户、中国站L3及以上用户设置有效。取值：
     * - **domestic**（默认值）：中国内地。
     * - **overseas**：海外及港澳台加速。
     * - **global**：全球加速。
     * @example `domestic`
     */
    "Scope"?: string;
    /**
     * 顶级接入域。
     * @example `learn.aliyundoc.com`
     */
    "TopLevelDomain"?: string;
}
