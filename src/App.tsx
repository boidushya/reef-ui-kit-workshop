import { useState } from "react";
import Uik from "@reef-defi/ui-kit";
import styled from "styled-components";

const Wrapper = styled.div`
  gap: 1rem;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  .button-container {
    max-width: 44rem;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const HeadingContainer = styled.div`
  height: 2rem;
  gap: 0.5rem;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  .text-heading {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .text-light {
    font-size: 0.875rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ButtonContainer = styled.div``;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <HeadingContainer>
        <div className="text-heading">
          <Uik.ReefLogo />
          <Uik.Text text="UI Kit Workshop" type="headline" />
        </div>
        <Uik.Text
          text="A workshop dedicated to Reef's UI Kit to help you kickstart your dApps easily!"
          type="light"
          className="text-light"
        />
      </HeadingContainer>
      <ButtonWrapper>
        <ButtonContainer>
          <Uik.Divider text="Buttons!" />
          <Uik.Container>
            <Uik.Button
              fill
              text="Default prompt"
              size="large"
              onClick={() =>
                Uik.prompt({
                  title: "Info",
                  message: "This is a default prompt.",
                  actions: <Uik.Button text="Close" />,
                })
              }
            />

            <Uik.Button
              success
              text="Success prompt"
              size="large"
              onClick={() =>
                Uik.prompt({
                  type: "success",
                  title: "Successfully completed",
                  message: "Your action has been successfully completed.",
                  actions: (
                    <>
                      <Uik.Button
                        text="Open"
                        fill
                        onClick={() => alert("Open was clicked")}
                      />
                      <Uik.Button text="Close" />
                    </>
                  ),
                })
              }
            />

            <Uik.Button
              danger
              text="Danger prompt"
              size="large"
              onClick={() =>
                Uik.prompt({
                  type: "danger",
                  title: "Error has occurred",
                  message:
                    "An expected error has occurred.\nPage will reload to keep everything in order.",
                  actions: <Uik.Button text="Reload page" />,
                })
              }
            />
          </Uik.Container>
          <Uik.Divider text="Fun Stuff" />
          <Uik.Container>
            <Uik.Button
              text="Drop Confetti"
              fill
              size="large"
              onClick={() => Uik.dropConfetti()}
            />

            <Uik.Button
              text="Drop Money"
              success
              size="large"
              onClick={() => Uik.dropMoney()}
            />
          </Uik.Container>
          <Uik.Divider text="Prompts" />
          <Uik.Container className="button-container">
            <Uik.Button
              fill
              text="Default notification"
              size="large"
              onClick={() =>
                Uik.notify.info(
                  "This is a default notification.It will go away after 4 seconds."
                )
              }
            />

            <Uik.Button
              success
              text="Success notification"
              size="large"
              onClick={() => Uik.notify.success("Successfully updated.")}
            />

            <Uik.Button
              danger
              text="Danger notification"
              size="large"
              onClick={() => Uik.notify.danger("An error has occurred.")}
            />

            <Uik.Button
              text="Notification for 1 second"
              size="large"
              onClick={() =>
                Uik.notify.info({
                  message: "This notification will disappear after 1 second.",
                  aliveFor: 1,
                })
              }
            />

            <Uik.Button
              text="Permanant notification"
              size="large"
              onClick={() =>
                Uik.notify.info({
                  message:
                    "This notification will remain on screen until it's manually closed.",
                  keepAlive: true,
                })
              }
            />

            <Uik.Button
              text="Notification with action"
              size="large"
              onClick={() =>
                Uik.notify.success({
                  message: "You have successfully created a new wallet.",
                  children: <Uik.Button success text="Open wallet" />,
                })
              }
            />

            <Uik.Button
              text="Prompt notification"
              size="large"
              onClick={() =>
                Uik.notify.info({
                  message:
                    "Use notifications as prompts.\nNotification will close if any button is clicked.",
                  keepAlive: true,
                  children: (
                    <>
                      <Uik.Button text="Cancel" />
                      <Uik.Button
                        text="Confirm"
                        fill
                        onClick={() => alert("Confirmed")}
                      />
                    </>
                  ),
                })
              }
            />
          </Uik.Container>
        </ButtonContainer>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default App;
