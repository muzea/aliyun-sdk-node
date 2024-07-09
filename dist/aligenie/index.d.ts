import { PushNotificationsRequest } from "./PushNotifications/req";
import { PushNotificationsResponse } from "./PushNotifications/res";
import { WakeUpAppRequest } from "./WakeUpApp/req";
import { WakeUpAppResponse } from "./WakeUpApp/res";
import { GetPhoneNumberRequest } from "./GetPhoneNumber/req";
import { GetPhoneNumberResponse } from "./GetPhoneNumber/res";
import { DeleteReminderRequest } from "./DeleteReminder/req";
import { DeleteReminderResponse } from "./DeleteReminder/res";
import { CreateReminderRequest } from "./CreateReminder/req";
import { CreateReminderResponse } from "./CreateReminder/res";
import { GetReminderRequest } from "./GetReminder/req";
import { GetReminderResponse } from "./GetReminder/res";
import { UpdateReminderRequest } from "./UpdateReminder/req";
import { UpdateReminderResponse } from "./UpdateReminder/res";
import { ListRemindersRequest } from "./ListReminders/req";
import { ListRemindersResponse } from "./ListReminders/res";
import { SendNotificationsRequest } from "./SendNotifications/req";
import { SendNotificationsResponse } from "./SendNotifications/res";
import { GetAccountForAppRequest } from "./GetAccountForApp/req";
import { GetAccountForAppResponse } from "./GetAccountForApp/res";
import { AppUseTimeReportRequest } from "./AppUseTimeReport/req";
import { AppUseTimeReportResponse } from "./AppUseTimeReport/res";
import { PullCashierRequest } from "./PullCashier/req";
import { PullCashierResponse } from "./PullCashier/res";
import { VideoAppReportRequest } from "./VideoAppReport/req";
import { VideoAppReportResponse } from "./VideoAppReport/res";
import { GetBusAppConfigRequest } from "./GetBusAppConfig/req";
import { GetBusAppConfigResponse } from "./GetBusAppConfig/res";
import { CheckThirdRightSendPlanRequest } from "./CheckThirdRightSendPlan/req";
import { CheckThirdRightSendPlanResponse } from "./CheckThirdRightSendPlan/res";
import { CallBackThirdRightSendPlanRequest } from "./CallBackThirdRightSendPlan/req";
import { CallBackThirdRightSendPlanResponse } from "./CallBackThirdRightSendPlan/res";

interface ALIGENIE {
    /**
     * 执行天猫精灵的消息推送功能。需先在猫精技能应用平台进行能力申请和消息模板配置。
     */
    PushNotifications(query: PushNotificationsRequest): Promise<PushNotificationsResponse>;
    /**
     * 在带屏音箱上，主动唤起猫精的屏显应用。需先在猫精技能应用平台进行能力申请。
     */
    WakeUpApp(query: WakeUpAppRequest): Promise<WakeUpAppResponse>;
    /**
     * 获取用户在猫精设备绑定的手机号。需先在猫精技能应用平台进行能力申请，并在设备端得到用户授权。
     */
    GetPhoneNumber(query: GetPhoneNumberRequest): Promise<GetPhoneNumberResponse>;
    /**
     * 用户删除在天猫精灵设备上创建的提醒。
     */
    DeleteReminder(query: DeleteReminderRequest): Promise<DeleteReminderResponse>;
    /**
     * 用于在天猫精灵设备上创建提醒。
     */
    CreateReminder(query: CreateReminderRequest): Promise<CreateReminderResponse>;
    /**
     * 用户获取在天猫精灵设备上创建的提醒。
     */
    GetReminder(query: GetReminderRequest): Promise<GetReminderResponse>;
    /**
     * 用户更新在天猫精灵设备上创建的提醒。
     */
    UpdateReminder(query: UpdateReminderRequest): Promise<UpdateReminderResponse>;
    /**
     * 用户批量获取在天猫精灵设备上创建的提醒。
     */
    ListReminders(query: ListRemindersRequest): Promise<ListRemindersResponse>;
    /**
     * 执行天猫精灵的消息推送功能。需先在猫精技能应用平台进行能力申请和消息模板配置。
     */
    SendNotifications(query: SendNotificationsRequest): Promise<SendNotificationsResponse>;
    /**
     * 用于开发者在依赖于猫精会员的业务场景下获取会员信息。
     */
    GetAccountForApp(query: GetAccountForAppRequest): Promise<GetAccountForAppResponse>;
    /**
     * 用于在天猫精灵设备上上报应用的使用时长。
     */
    AppUseTimeReport(query: AppUseTimeReportRequest): Promise<AppUseTimeReportResponse>;
    /**
     * 用户在天猫精灵设备上拉起收银台。
     */
    PullCashier(query: PullCashierRequest): Promise<PullCashierResponse>;
    /**
     * 用于开发者在与猫精进行会员合作的场景下上报其会员信息。
     */
    VideoAppReport(query: VideoAppReportRequest): Promise<VideoAppReportResponse>;
    /**
     * 获取应用配置。
     */
    GetBusAppConfig(query: GetBusAppConfigRequest): Promise<GetBusAppConfigResponse>;
    /**
     * 商业化移动屏三方app领卡校验。
     */
    CheckThirdRightSendPlan(query: CheckThirdRightSendPlanRequest): Promise<CheckThirdRightSendPlanResponse>;
    /**
     * 三方领取回调接口。
     */
    CallBackThirdRightSendPlan(query: CallBackThirdRightSendPlanRequest): Promise<CallBackThirdRightSendPlanResponse>;
}
export default ALIGENIE;
