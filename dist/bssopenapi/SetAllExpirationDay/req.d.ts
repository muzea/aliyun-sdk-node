export interface SetAllExpirationDayRequest {
    /**
     * 当前统一到期日设置只支持未过期云服务器ECS实例，已过期实例无法对齐统一到期日。设置完成后，可在续费时对齐设置的统一到期时间
     * 日期范围：每月1号至28号
     * @example `10`
     */
    "UnifyExpireDay": string;
}
