/// <reference types="vite/client" />

interface Window {
  Gleam?: {
    startCompetition: (id: string) => void;
  };
}