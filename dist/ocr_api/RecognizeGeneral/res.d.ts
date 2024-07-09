export interface RecognizeGeneralResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"content":"iPhone 12 升维大提速。 RMB 229/月或RMB 5499起, 还可折抵换购1。 进一步了解 > 你可以立即在线购买并享受免费送货服务,也可以预约到附近的 Apple Store零售店购买+。 如果你已加入iPhone年年焕新计划, 请先查询你的升级换购资格, 然后预约前往Apple Store零售店换购新款iPhone。 查询升级换购资格> in ","height":655,"orgHeight":655,"orgWidth":805,"prism_version":"1.0.9","prism_wnum":11,"prism_wordsInfo":[{"angle":-88,"direction":0,"height":111,"pos":[{"x":351,"y":45},{"x":461,"y":46},{"x":461,"y":67},{"x":351,"y":66}],"prob":99,"width":20,"word":"iPhone 12","x":396,"y":0}],"width":805}`
     */
    Data: string;
    /**
     * 状态码（如果识别成功，不会返回此字段）
     * @example `illegalImageUrl`
     */
    Code: string;
    /**
     * 详细信息（如果识别成功，不会返回此字段）
     * @example `Image url cannot open or timeout.`
     */
    Message: string;
}
