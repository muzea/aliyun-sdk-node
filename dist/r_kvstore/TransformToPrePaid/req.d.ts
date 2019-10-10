interface TransformToPrePaidRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 预付费时长，单位是月。取值范围：1-9、12、24、36。
    * @example `12`
    */ "Period": number;
    "OwnerId"?: number;
    /**
    * 需要转换付费类型的实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 是否自动付款，可选值：
    * * true（是）
    * * false（否）
    * 默认值：false。
    * > 当值为`false`时，请在实例即将到期时到控制台[手动续费](~~26352~~)。
    * @example `true`
    */ "AutoPay"?: boolean;
    "FromApp"?: string;
}
export { TransformToPrePaidRequest };