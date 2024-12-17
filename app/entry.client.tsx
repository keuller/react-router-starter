import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import { startTransition, StrictMode } from "react";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
