interface CreateAlertContactRequest {
    /**
    * 地域 ID
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 报警联系人姓名
    * @example `JohnDoe`
    */ "ContactName"?: string;
    /**
    * 手机号码
    * @example `1381111****`
    */ "PhoneNum"?: string;
    /**
    * 邮箱
    * @example `johndoe@example.com`
    */ "Email"?: string;
    /**
    * 钉钉机器人地址
    * @example `123456`
    */ "DingRobotWebhookUrl"?: string;
    /**
    * 是否接收系统报警通知
    * @example `true`
    */ "SystemNoc"?: boolean;
}
export { CreateAlertContactRequest };