export interface DescribePhoneTwiceTelVerifyRequest {
    /**
     * 授权码。
     * > 在[号码百科控制台](https://dytns.console.aliyun.com/analysis/apply)**我的申请**页面，获取授权ID即授权码。
     * @example `Dd1r***4id`
     */
    "AuthCode": string;
    /**
     * 待查询的号码。
     * - 若Mask取值为NORMAL，该字段为11位手机号码。
     * - 若Mask取值为MD5，该字段为32位加密字符串。
     * - 若Mask取值为SHA256，该字段为64位加密字符串。
     * ><notice>加密字符串中字母不区分大小写。></notice>
     * @example `139*******`
     */
    "InputNumber": string;
    /**
     * 号码的加密方式。取值：
     * - **NORMAL**：不加密
     * - **MD5**
     * - **SHA256**
     * @example `NORMAL`
     */
    "Mask": string;
    /**
     * 时间，格式必须为yyyy-MM-dd HH:mm:ss。该时间为手机用户在业务侧的注册时间。如果注册时间在运营商放号时间之后，则表示该号码不是二次号，否则返回结果是二次号。
     * > - 若单个号码在运营商侧存在多次放号的情况，系统将以最后一次在运营商侧的放号时间作为判断依据。
     * > - 注册时间必须为1970-01-01 00:00:00之后的时间。
     * @example `2018-01-01 00:00:00`
     */
    "StartTime": string;
}
