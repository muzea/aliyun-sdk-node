import { BindAliasRequest } from "./BindAlias/req";
import { BindAliasResponse } from "./BindAlias/res";
import { BindPhoneRequest } from "./BindPhone/req";
import { BindPhoneResponse } from "./BindPhone/res";
import { CancelPushRequest } from "./CancelPush/req";
import { CancelPushResponse } from "./CancelPush/res";
import { CheckDeviceRequest } from "./CheckDevice/req";
import { CheckDeviceResponse } from "./CheckDevice/res";
import { BindTagRequest } from "./BindTag/req";
import { BindTagResponse } from "./BindTag/res";
import { CheckDevicesRequest } from "./CheckDevices/req";
import { CheckDevicesResponse } from "./CheckDevices/res";
import { CompleteContinuouslyPushRequest } from "./CompleteContinuouslyPush/req";
import { CompleteContinuouslyPushResponse } from "./CompleteContinuouslyPush/res";
import { ContinuouslyPushRequest } from "./ContinuouslyPush/req";
import { ContinuouslyPushResponse } from "./ContinuouslyPush/res";
import { ListSummaryAppsRequest } from "./ListSummaryApps/req";
import { ListSummaryAppsResponse } from "./ListSummaryApps/res";
import { ListTagsRequest } from "./ListTags/req";
import { ListTagsResponse } from "./ListTags/res";
import { MassPushRequest } from "./MassPush/req";
import { MassPushResponse } from "./MassPush/res";
import { PushRequest } from "./Push/req";
import { PushResponse } from "./Push/res";
import { PushMessageToiOSRequest } from "./PushMessageToiOS/req";
import { PushMessageToiOSResponse } from "./PushMessageToiOS/res";
import { PushMessageToAndroidRequest } from "./PushMessageToAndroid/req";
import { PushMessageToAndroidResponse } from "./PushMessageToAndroid/res";
import { PushNoticeToAndroidRequest } from "./PushNoticeToAndroid/req";
import { PushNoticeToAndroidResponse } from "./PushNoticeToAndroid/res";
import { PushNoticeToiOSRequest } from "./PushNoticeToiOS/req";
import { PushNoticeToiOSResponse } from "./PushNoticeToiOS/res";
import { QueryAliasesRequest } from "./QueryAliases/req";
import { QueryAliasesResponse } from "./QueryAliases/res";
import { QueryDeviceInfoRequest } from "./QueryDeviceInfo/req";
import { QueryDeviceInfoResponse } from "./QueryDeviceInfo/res";
import { QueryDeviceStatRequest } from "./QueryDeviceStat/req";
import { QueryDeviceStatResponse } from "./QueryDeviceStat/res";
import { QueryDevicesByAccountRequest } from "./QueryDevicesByAccount/req";
import { QueryDevicesByAccountResponse } from "./QueryDevicesByAccount/res";
import { QueryDevicesByAliasRequest } from "./QueryDevicesByAlias/req";
import { QueryDevicesByAliasResponse } from "./QueryDevicesByAlias/res";
import { QueryPushRecordsRequest } from "./QueryPushRecords/req";
import { QueryPushRecordsResponse } from "./QueryPushRecords/res";
import { QueryPushStatByAppRequest } from "./QueryPushStatByApp/req";
import { QueryPushStatByAppResponse } from "./QueryPushStatByApp/res";
import { QueryPushStatByMsgRequest } from "./QueryPushStatByMsg/req";
import { QueryPushStatByMsgResponse } from "./QueryPushStatByMsg/res";
import { QueryTagsRequest } from "./QueryTags/req";
import { QueryTagsResponse } from "./QueryTags/res";
import { QueryUniqueDeviceStatRequest } from "./QueryUniqueDeviceStat/req";
import { QueryUniqueDeviceStatResponse } from "./QueryUniqueDeviceStat/res";
import { RemoveTagRequest } from "./RemoveTag/req";
import { RemoveTagResponse } from "./RemoveTag/res";
import { UnbindAliasRequest } from "./UnbindAlias/req";
import { UnbindAliasResponse } from "./UnbindAlias/res";
import { UnbindPhoneRequest } from "./UnbindPhone/req";
import { UnbindPhoneResponse } from "./UnbindPhone/res";
import { UnbindTagRequest } from "./UnbindTag/req";
import { UnbindTagResponse } from "./UnbindTag/res";
import { CheckCertificateRequest } from "./CheckCertificate/req";
import { CheckCertificateResponse } from "./CheckCertificate/res";

interface PUSH {
    /**
     * 绑定设备和别名的关系。
     */
    BindAlias(query: BindAliasRequest): Promise<BindAliasResponse>;
    /**
     * 绑定设备与手机号的关系。
     */
    BindPhone(query: BindPhoneRequest): Promise<BindPhoneResponse>;
    /**
     * 取消某次尚未执行的定时推送任务。
     */
    CancelPush(query: CancelPushRequest): Promise<CancelPushResponse>;
    /**
     * 验证指定设备的有效性。
     */
    CheckDevice(query: CheckDeviceRequest): Promise<CheckDeviceResponse>;
    /**
     * 将TAG绑定到指定的目标（设备、账号或别名），TAG绑定在10分钟内生效。
     */
    BindTag(query: BindTagRequest): Promise<BindTagResponse>;
    /**
     * 验证指定的一组设备的有效性。
     */
    CheckDevices(query: CheckDevicesRequest): Promise<CheckDevicesResponse>;
    /**
     * 手动结束持续推送任务。
     */
    CompleteContinuouslyPush(query: CompleteContinuouslyPushRequest): Promise<CompleteContinuouslyPushResponse>;
    /**
     * 执行预定义的持续推送任务。
     */
    ContinuouslyPush(query: ContinuouslyPushRequest): Promise<ContinuouslyPushResponse>;
    /**
     * 查询云账号下所有app的列表。
     */
    ListSummaryApps(query: ListSummaryAppsRequest): Promise<ListSummaryAppsResponse>;
    /**
     * 查询app的标签列表，最多返回100条记录。
     */
    ListTags(query: ListTagsRequest): Promise<ListTagsResponse>;
    /**
     * 批量给不同的设备推送不同的消息/通知。
     */
    MassPush(query: MassPushRequest): Promise<MassPushResponse>;
    /**
     * 高级推送接口，提供丰富的推送定制参数。
     */
    Push(query: PushRequest): Promise<PushResponse>;
    /**
     * 推送消息给iOS设备。
     */
    PushMessageToiOS(query: PushMessageToiOSRequest): Promise<PushMessageToiOSResponse>;
    /**
     * 推送消息给Android设备。
     */
    PushMessageToAndroid(query: PushMessageToAndroidRequest): Promise<PushMessageToAndroidResponse>;
    /**
     * 推送通知给Android设备，本接口仅通过阿里云自有通道进行推送。
     */
    PushNoticeToAndroid(query: PushNoticeToAndroidRequest): Promise<PushNoticeToAndroidResponse>;
    /**
     * 推送通知给iOS设备，iOS设备需要处于在线状态。
     */
    PushNoticeToiOS(query: PushNoticeToiOSRequest): Promise<PushNoticeToiOSResponse>;
    /**
     * 查询指定设备绑定的别名列表。
     */
    QueryAliases(query: QueryAliasesRequest): Promise<QueryAliasesResponse>;
    /**
     * 查询指定设备详细信息。
     */
    QueryDeviceInfo(query: QueryDeviceInfoRequest): Promise<QueryDeviceInfoResponse>;
    /**
     * 查询app维度的设备统计。
     */
    QueryDeviceStat(query: QueryDeviceStatRequest): Promise<QueryDeviceStatResponse>;
    /**
     * 通过账户名称查询对应的设备列表。
     */
    QueryDevicesByAccount(query: QueryDevicesByAccountRequest): Promise<QueryDevicesByAccountResponse>;
    /**
     * 通过别名查询对应的设备列表。
     */
    QueryDevicesByAlias(query: QueryDevicesByAliasRequest): Promise<QueryDevicesByAliasResponse>;
    /**
     * 分页查询推送记录，并提供一些简单的筛选能力。
     */
    QueryPushRecords(query: QueryPushRecordsRequest): Promise<QueryPushRecordsResponse>;
    /**
     * 查询app维度的推送统计。
     */
    QueryPushStatByApp(query: QueryPushStatByAppRequest): Promise<QueryPushStatByAppResponse>;
    /**
     * 查询消息维度的推送统计。
     */
    QueryPushStatByMsg(query: QueryPushStatByMsgRequest): Promise<QueryPushStatByMsgResponse>;
    /**
     * 查询指定对象（设备、账号或别名）的TAG列表。
     */
    QueryTags(query: QueryTagsRequest): Promise<QueryTagsResponse>;
    /**
     * 查询app维度的去重设备统计。
     */
    QueryUniqueDeviceStat(query: QueryUniqueDeviceStatRequest): Promise<QueryUniqueDeviceStatResponse>;
    /**
     * 删除app下的TAG。
     */
    RemoveTag(query: RemoveTagRequest): Promise<RemoveTagResponse>;
    /**
     * 解绑别名，解绑立即生效。
     */
    UnbindAlias(query: UnbindAliasRequest): Promise<UnbindAliasResponse>;
    /**
     * 解绑指定设备上已绑定的手机号码。
     */
    UnbindPhone(query: UnbindPhoneRequest): Promise<UnbindPhoneResponse>;
    /**
     * 解绑指定的TAG和其目标之间的关系。
     */
    UnbindTag(query: UnbindTagRequest): Promise<UnbindTagResponse>;
    /**
     * 检测指定app的iOS证书过期时间及当前证书状态。
     */
    CheckCertificate(query: CheckCertificateRequest): Promise<CheckCertificateResponse>;
}
export default PUSH;
