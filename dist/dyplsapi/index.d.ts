import { QuerySecretNoRemainRequest } from "./QuerySecretNoRemain/req";
import { QuerySecretNoRemainResponse } from "./QuerySecretNoRemain/res";
import { QueryCallStatusRequest } from "./QueryCallStatus/req";
import { QueryCallStatusResponse } from "./QueryCallStatus/res";
import { BuySecretNoRequest } from "./BuySecretNo/req";
import { BuySecretNoResponse } from "./BuySecretNo/res";
import { ReleaseSecretNoRequest } from "./ReleaseSecretNo/req";
import { ReleaseSecretNoResponse } from "./ReleaseSecretNo/res";
import { QuerySubscriptionDetailRequest } from "./QuerySubscriptionDetail/req";
import { QuerySubscriptionDetailResponse } from "./QuerySubscriptionDetail/res";
import { QuerySubsIdRequest } from "./QuerySubsId/req";
import { QuerySubsIdResponse } from "./QuerySubsId/res";
import { BindAxbRequest } from "./BindAxb/req";
import { BindAxbResponse } from "./BindAxb/res";
import { QueryRecordFileDownloadUrlRequest } from "./QueryRecordFileDownloadUrl/req";
import { QueryRecordFileDownloadUrlResponse } from "./QueryRecordFileDownloadUrl/res";
import { BindAxnExtensionRequest } from "./BindAxnExtension/req";
import { BindAxnExtensionResponse } from "./BindAxnExtension/res";
import { BindAxnRequest } from "./BindAxn/req";
import { BindAxnResponse } from "./BindAxn/res";
import { BindAxgRequest } from "./BindAxg/req";
import { BindAxgResponse } from "./BindAxg/res";
import { CreateAxgGroupRequest } from "./CreateAxgGroup/req";
import { CreateAxgGroupResponse } from "./CreateAxgGroup/res";
import { OperateAxgGroupRequest } from "./OperateAxgGroup/req";
import { OperateAxgGroupResponse } from "./OperateAxgGroup/res";
import { UpdateSubscriptionRequest } from "./UpdateSubscription/req";
import { UpdateSubscriptionResponse } from "./UpdateSubscription/res";
import { UnbindSubscriptionRequest } from "./UnbindSubscription/req";
import { UnbindSubscriptionResponse } from "./UnbindSubscription/res";

interface DYPLSAPI {
    /**
    * 调用接口QuerySecretNoRemain查询线上可购号码余量。
    */ QuerySecretNoRemain(query: QuerySecretNoRemainRequest): Promise<QuerySecretNoRemainResponse>;
    /**
    * 调用接口QueryCallStatus查询呼叫状态。
    */ QueryCallStatus(query: QueryCallStatusRequest): Promise<QueryCallStatusResponse>;
    /**
    * 调用BuySecretNo接口购买号码。
    */ BuySecretNo(query: BuySecretNoRequest): Promise<BuySecretNoResponse>;
    /**
    * 调用接口ReleaseSecretNo释放号码。
    */ ReleaseSecretNo(query: ReleaseSecretNoRequest): Promise<ReleaseSecretNoResponse>;
    /**
    * 调用接口QuerySubscriptionDetail查询号码的绑定关系。
    */ QuerySubscriptionDetail(query: QuerySubscriptionDetailRequest): Promise<QuerySubscriptionDetailResponse>;
    /**
    * 调用接口QuerySubsId查询绑定唯一标识SubsId。
    */ QuerySubsId(query: QuerySubsIdRequest): Promise<QuerySubsIdResponse>;
    /**
    * 调用接口BindAxb添加AXB号码的绑定关系。
    */ BindAxb(query: BindAxbRequest): Promise<BindAxbResponse>;
    /**
    * 调用接口QueryRecordFileDownloadUrl获取录音文件的下载链接。
    */ QueryRecordFileDownloadUrl(query: QueryRecordFileDownloadUrlRequest): Promise<QueryRecordFileDownloadUrlResponse>;
    /**
    * 调用接口BindAxnExtension添加AXN分机号码的绑定关系。
    */ BindAxnExtension(query: BindAxnExtensionRequest): Promise<BindAxnExtensionResponse>;
    /**
    * 调用接口BindAxn添加AXN号码的绑定关系。
    */ BindAxn(query: BindAxnRequest): Promise<BindAxnResponse>;
    /**
    * 调用接口BindAxg添加AXG号码的绑定关系。
    */ BindAxg(query: BindAxgRequest): Promise<BindAxgResponse>;
    /**
    * 调用接口CreateAxgGroup创建G号码组。
    */ CreateAxgGroup(query: CreateAxgGroupRequest): Promise<CreateAxgGroupResponse>;
    /**
    * 调用接口OperateAxgGroup修改G号码组。
    */ OperateAxgGroup(query: OperateAxgGroupRequest): Promise<OperateAxgGroupResponse>;
    /**
    * 调用接口UpdateSubscription修改绑定关系。
    */ UpdateSubscription(query: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse>;
    /**
    * 调用接口UnbindSubscription解除号码的绑定关系。
    */ UnbindSubscription(query: UnbindSubscriptionRequest): Promise<UnbindSubscriptionResponse>;
}
export default DYPLSAPI;
