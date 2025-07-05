import cx from "classnames";
import { t } from "ttag";

import {
  SettingsPageWrapper,
  SettingsSection,
} from "metabase/admin/components/SettingsSection";
import ButtonsS from "metabase/css/components/buttons.module.css";
import CS from "metabase/css/core/index.css";
import { Button } from "metabase/ui";

import { AdminSettingInput } from "../widgets/AdminSettingInput";

export function GenAI() {
  return (
    <SettingsPageWrapper title={t`Generative AI Integration`}>
      <SettingsSection>
        <AdminSettingInput
          name="genai-key"
          title={t`Google's Gemini Api key`}
          description={
            <>
              <div>{t`This will be the primary key used to connect to GCP.`}</div>
            </>
          }
          inputType="text"
        />
        <Button
          className={cx(
            ButtonsS.Button,
            ButtonsS.ButtonSmall,
            ButtonsS.ButtonPrimary,
            CS.ml1,
          )}
          onClick={() => {}}
          variant="transparent"
        >
          {t`Create Connection`}
        </Button>
      </SettingsSection>
    </SettingsPageWrapper>
  );
}
