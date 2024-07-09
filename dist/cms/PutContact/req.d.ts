export interface PutContactRequest {
    /**
     * 报警联系人姓名。
     * @example `Alice`
     */
    "ContactName": string;
    /**
     * 报警联系人描述详情。
     * @example `ECS_Instance`
     */
    "Describe": string;
    /**
     * 手机号码。手机号码会收到一个激活链接， 激活之后您才会被加入到联系人中。
     * <props="china">手机号码、邮箱、钉钉机器人和旺旺最少添加一种联系方式。</props>
     * <props="intl">邮箱和钉钉机器人最少添加一种联系方式。</props>
     * <props="partner">邮箱和钉钉机器人最少添加一种联系方式。</props>
     * @example `1333333****`
     */
    "Channels.SMS"?: string;
    /**
     * Email地址。Email会收到一个激活链接， 激活之后您才会被加入到联系人中。
     * <props="china">手机号码、邮箱、钉钉机器人和旺旺最少添加一种联系方式。</props>
     * <props="intl">邮箱和钉钉机器人最少添加一种联系方式。</props>
     * <props="partner">邮箱和钉钉机器人最少添加一种联系方式。</props>
     * @example `test@aliyun.com`
     */
    "Channels.Mail"?: string;
    /**
     * 旺旺联系人。
     * <props="china">手机号码、邮箱、钉钉机器人和旺旺最少添加一种联系方式。</props>
     * <props="intl">邮箱和钉钉机器人最少添加一种联系方式。</props>
     * <props="partner">邮箱和钉钉机器人最少添加一种联系方式。</props>
     * @example `Jim`
     */
    "Channels.AliIM"?: string;
    /**
     * 钉钉机器人。
     * <props="china">手机号码、邮箱、钉钉机器人和旺旺最少添加一种联系方式。</props>
     * <props="intl">邮箱和钉钉机器人最少添加一种联系方式。</props>
     * <props="partner">邮箱和钉钉机器人最少添加一种联系方式。</props>
     * @example `https://oapi.dingtalk.com/robot/send?access_token=7d49515e8ebf21106a80a9cc4bb3d247771305d52fb15d6201234565****`
     */
    "Channels.DingWebHook"?: string;
    /**
     * 报警的语言类型。取值：
     * - zh-cn：简体中文。
     * - en：英文。
     * > 如果不设置该参数，则自动按照账号归属地域自动识别。
     * @example `zh-cn`
     */
    "Lang"?: string;
}
