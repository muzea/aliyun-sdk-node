import { AddAxnTrackNoRequest } from "./AddAxnTrackNo/req";
import { AddAxnTrackNoResponse } from "./AddAxnTrackNo/res";
import { AddSecretBlacklistRequest } from "./AddSecretBlacklist/req";
import { AddSecretBlacklistResponse } from "./AddSecretBlacklist/res";
import { BindAxbRequest } from "./BindAxb/req";
import { BindAxbResponse } from "./BindAxb/res";
import { BindAxgRequest } from "./BindAxg/req";
import { BindAxgResponse } from "./BindAxg/res";
import { BindAxnRequest } from "./BindAxn/req";
import { BindAxnResponse } from "./BindAxn/res";
import { BindAxnExtensionRequest } from "./BindAxnExtension/req";
import { BindAxnExtensionResponse } from "./BindAxnExtension/res";
import { BuySecretNoRequest } from "./BuySecretNo/req";
import { BuySecretNoResponse } from "./BuySecretNo/res";
import { CreateAxgGroupRequest } from "./CreateAxgGroup/req";
import { CreateAxgGroupResponse } from "./CreateAxgGroup/res";
import { DeleteSecretBlacklistRequest } from "./DeleteSecretBlacklist/req";
import { DeleteSecretBlacklistResponse } from "./DeleteSecretBlacklist/res";
import { GetSecretAsrDetailRequest } from "./GetSecretAsrDetail/req";
import { GetSecretAsrDetailResponse } from "./GetSecretAsrDetail/res";
import { GetTotalPublicUrlRequest } from "./GetTotalPublicUrl/req";
import { GetTotalPublicUrlResponse } from "./GetTotalPublicUrl/res";
import { LockSecretNoRequest } from "./LockSecretNo/req";
import { LockSecretNoResponse } from "./LockSecretNo/res";
import { OperateAxgGroupRequest } from "./OperateAxgGroup/req";
import { OperateAxgGroupResponse } from "./OperateAxgGroup/res";
import { OperateBlackNoRequest } from "./OperateBlackNo/req";
import { OperateBlackNoResponse } from "./OperateBlackNo/res";
import { QueryPhoneNoAByTrackNoRequest } from "./QueryPhoneNoAByTrackNo/req";
import { QueryPhoneNoAByTrackNoResponse } from "./QueryPhoneNoAByTrackNo/res";
import { QueryRecordFileDownloadUrlRequest } from "./QueryRecordFileDownloadUrl/req";
import { QueryRecordFileDownloadUrlResponse } from "./QueryRecordFileDownloadUrl/res";
import { QuerySecretNoRemainRequest } from "./QuerySecretNoRemain/req";
import { QuerySecretNoRemainResponse } from "./QuerySecretNoRemain/res";
import { QuerySubsIdRequest } from "./QuerySubsId/req";
import { QuerySubsIdResponse } from "./QuerySubsId/res";
import { QuerySubscriptionDetailRequest } from "./QuerySubscriptionDetail/req";
import { QuerySubscriptionDetailResponse } from "./QuerySubscriptionDetail/res";
import { ReleaseSecretNoRequest } from "./ReleaseSecretNo/req";
import { ReleaseSecretNoResponse } from "./ReleaseSecretNo/res";
import { UnbindSubscriptionRequest } from "./UnbindSubscription/req";
import { UnbindSubscriptionResponse } from "./UnbindSubscription/res";
import { UnlockSecretNoRequest } from "./UnlockSecretNo/req";
import { UnlockSecretNoResponse } from "./UnlockSecretNo/res";
import { UpdateSubscriptionRequest } from "./UpdateSubscription/req";
import { UpdateSubscriptionResponse } from "./UpdateSubscription/res";
import { CreatePickUpWaybillRequest } from "./CreatePickUpWaybill/req";
import { CreatePickUpWaybillResponse } from "./CreatePickUpWaybill/res";
import { CancelPickUpWaybillRequest } from "./CancelPickUpWaybill/req";
import { CancelPickUpWaybillResponse } from "./CancelPickUpWaybill/res";
import { QuerySecretNoDetailRequest } from "./QuerySecretNoDetail/req";
import { QuerySecretNoDetailResponse } from "./QuerySecretNoDetail/res";
import { CreatePickUpWaybillPreQueryRequest } from "./CreatePickUpWaybillPreQuery/req";
import { CreatePickUpWaybillPreQueryResponse } from "./CreatePickUpWaybillPreQuery/res";
import { DeleteAxgGroupRequest } from "./DeleteAxgGroup/req";
import { DeleteAxgGroupResponse } from "./DeleteAxgGroup/res";
import { BindBatchAxgRequest } from "./BindBatchAxg/req";
import { BindBatchAxgResponse } from "./BindBatchAxg/res";

interface DYPLSAPI {
    /**
     * 为AXN隐私号添加运单号。
     */
    AddAxnTrackNo(query: AddAxnTrackNoRequest): Promise<AddAxnTrackNoResponse>;
    /**
     * 向号码池添加黑名单。仅AXN隐私号、AXN分机号、95AXN隐私号类型的号码池支持设置黑名单。
     */
    AddSecretBlacklist(query: AddSecretBlacklistRequest): Promise<AddSecretBlacklistResponse>;
    /**
     * AXB中间号，是将拨打关系限定在一对一关系中，用户A可以通过中间号码X联系到用户B，用户B也可以通过中间号码X联系到用户A。
     */
    BindAxb(query: BindAxbRequest): Promise<BindAxbResponse>;
    /**
     * 添加AXG号码的绑定关系。AXG产品是针对有用户分级需求、限制呼叫范围、限制抢单等场景的客户需求提供的号码隐私保护解决方案，其中G代表一个号码组，可以根据需要添加号码。
     */
    BindAxg(query: BindAxgRequest): Promise<BindAxgResponse>;
    /**
     * 添加AXN隐私号的绑定关系。AXN隐私号是为A用户分配一个专属的隐私号，任何号码N通过拨打X号码都可以转接到A。
     */
    BindAxn(query: BindAxnRequest): Promise<BindAxnResponse>;
    /**
     * 添加AXN分机号的绑定关系。AXN分机号与AXN隐私号功能类似，AXN分机号在AXN基础上引入了分机号，从而降低X号码的使用量，在呼叫时候首先拨打X号码，听到提示音后输入对应分机号转接到A。
     */
    BindAxnExtension(query: BindAxnExtensionRequest): Promise<BindAxnExtensionResponse>;
    /**
     * 购买号码。
     */
    BuySecretNo(query: BuySecretNoRequest): Promise<BuySecretNoResponse>;
    /**
     * 创建G号码组。仅AXG隐私号类型的号码池支持设置G号码组。
     */
    CreateAxgGroup(query: CreateAxgGroupRequest): Promise<CreateAxgGroupResponse>;
    /**
     * 删除号码池的黑名单。仅AXN隐私号、AXN分机号、95AXN隐私号类型的号码池支持设置黑名单。
     */
    DeleteSecretBlacklist(query: DeleteSecretBlacklistRequest): Promise<DeleteSecretBlacklistResponse>;
    /**
     * 获取ASR识别结果详情。
     */
    GetSecretAsrDetail(query: GetSecretAsrDetailRequest): Promise<GetSecretAsrDetailResponse>;
    /**
     * 获取响铃放音的录音下载链接。
     */
    GetTotalPublicUrl(query: GetTotalPublicUrlRequest): Promise<GetTotalPublicUrlResponse>;
    /**
     * 锁定号码。适用于需要临时屏蔽异常号码的场景。
     */
    LockSecretNo(query: LockSecretNoRequest): Promise<LockSecretNoResponse>;
    /**
     * 修改G号码组中的号码，可以对号码进行添加、删除、全量替换操作。
     */
    OperateAxgGroup(query: OperateAxgGroupRequest): Promise<OperateAxgGroupResponse>;
    /**
     * 新增或删除号池黑名单。仅AXN隐私号、AXN分机号、95AXN隐私号类型的号码池支持设置黑名单。
     */
    OperateBlackNo(query: OperateBlackNoRequest): Promise<OperateBlackNoResponse>;
    /**
     * 广播推送运单号。
     */
    QueryPhoneNoAByTrackNo(query: QueryPhoneNoAByTrackNoRequest): Promise<QueryPhoneNoAByTrackNoResponse>;
    /**
     * 根据号码池Key、呼叫记录ID、呼叫发起时间等获取录音文件的下载链接。
     */
    QueryRecordFileDownloadUrl(query: QueryRecordFileDownloadUrlRequest): Promise<QueryRecordFileDownloadUrlResponse>;
    /**
     * 查询线上可购号码余量。
     */
    QuerySecretNoRemain(query: QuerySecretNoRemainRequest): Promise<QuerySecretNoRemainResponse>;
    /**
     * 查询绑定关系的唯一标识SubsId。
     */
    QuerySubsId(query: QuerySubsIdRequest): Promise<QuerySubsIdResponse>;
    /**
     * 查询号码的绑定详情。获取号码绑定关系状态、分机号码、是否录音、ASR状态等信息。
     */
    QuerySubscriptionDetail(query: QuerySubscriptionDetailRequest): Promise<QuerySubscriptionDetailResponse>;
    /**
     * 释放号码。释放后所选号码将不可继续使用。
     */
    ReleaseSecretNo(query: ReleaseSecretNoRequest): Promise<ReleaseSecretNoResponse>;
    /**
     * 解除号码的绑定关系。
     */
    UnbindSubscription(query: UnbindSubscriptionRequest): Promise<UnbindSubscriptionResponse>;
    /**
     * 解锁号码。解除号码的临时屏蔽。
     */
    UnlockSecretNo(query: UnlockSecretNoRequest): Promise<UnlockSecretNoResponse>;
    /**
     * 修改号码的绑定关系。
     */
    UpdateSubscription(query: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse>;
    /**
     * 创建上门寄件订单。
     */
    CreatePickUpWaybill(query: CreatePickUpWaybillRequest): Promise<CreatePickUpWaybillResponse>;
    /**
     * 取消上门寄件订单。
     */
    CancelPickUpWaybill(query: CancelPickUpWaybillRequest): Promise<CancelPickUpWaybillResponse>;
    /**
     * 查询隐私号码的属性信息。
     */
    QuerySecretNoDetail(query: QuerySecretNoDetailRequest): Promise<QuerySecretNoDetailResponse>;
    /**
     * 寄件下单预查询。
     */
    CreatePickUpWaybillPreQuery(query: CreatePickUpWaybillPreQueryRequest): Promise<CreatePickUpWaybillPreQueryResponse>;
    /**
     * 删除G号码组。仅AXG隐私号类型的号码池支持设置G号码组。
     */
    DeleteAxgGroup(query: DeleteAxgGroupRequest): Promise<DeleteAxgGroupResponse>;
    /**
     * 批量添加AXG号码的绑定关系。AXG产品是针对有用户分级需求、限制呼叫范围、限制抢单等场景的客户需求提供的号码隐私保护解决方案，其中G代表一个号码组，可以根据需要添加号码。
     */
    BindBatchAxg(query: BindBatchAxgRequest): Promise<BindBatchAxgResponse>;
}
export default DYPLSAPI;
